import groovy.servlet.GroovyServlet

class MyGroovyServlet extends GroovyServlet {
    void doGet(HttpServletRequest request, HttpServletResponse response) {
        response.contentType = 'text/html'
        response.writer << '''
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Groovy Script Website</title>
        </head>
        <body>
            <h1>Welcome to the Groovy Script Website</h1>
            <p>This is a simple Groovy script serving HTML content.</p>
        </body>
        </html>
        '''
    }
}
