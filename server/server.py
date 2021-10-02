import tornado.ioloop
import tornado.web

PORT = 8888

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        print('Sending file to web-client..')
        self.render('user.json')

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(PORT)
    print('Server listening on port ' + str(PORT))
    tornado.ioloop.IOLoop.current().start()