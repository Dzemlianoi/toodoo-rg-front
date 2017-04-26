describe 'ProjectsDirective', ->
  element = null
  controller_scope = null
  task =
    id: 1
    title:'first task'
    deadline: null
    priority: 1
    completed: false
    comments:[ { id: 1, comment_text: 'Test'}]
  beforeEach ->
    element = angular.element('<comment-wrapper task="task"></comment-wrapper>')
    @scope.task = task
    @http.whenGET('/views/signin.html').respond(200, [])
    @http.whenGET('views/directives/comment-wrapper.html').respond(200, [])
    @http.whenGET('http://toodoo-rg.herokuapp.com/comments.json?task_id=1').respond(200, @scope.task.comments)
    @compile(element)(@scope)
    @scope.$digest()
    @http.flush()
    controller_scope = @scope.$$childTail

  describe 'load', ->
    it 'present isolated scope variables', ->
      expect(@scope.task).toBeDefined()
      expect(controller_scope.comments).toBeDefined()
  describe 'adding comment', ->
    it 'add comment to comments list', ->
      controller_scope.file = 'Some file'
      controller_scope.comment_text = 'Added text'
      @http.whenPOST('http://toodoo-rg.herokuapp.com/comments/').respond 200,
        id: 2
        title: 'Second comment'
      controller_scope.addComment()
      @http.flush()
      expect(controller_scope.comments.length).toEqual(2)
      expect(controller_scope.comment_text).toBe('')
      expect(controller_scope.file).toBe('')

  describe 'removing', ->
    it 'changes quantity of comments by 1', ->
      @http.whenDELETE('http://toodoo-rg.herokuapp.com/comments/1.json').respond 200, { }
      controller_scope.removeComment(controller_scope.comments[0])
      @http.flush()
      expect(controller_scope.comments.length).toEqual(0)
