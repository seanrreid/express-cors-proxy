# Express CORS Proxy

## Simple Express CORS Proxy

* Passes the necessary headers that CORS requires.
* Send a url as a query parameter to `/proxy`
  * i.e. `http://localhost:3000/proxy?url=https://somesitewithcors.com/`
* It wraps a response in a `try / catch` to return a JSON object, or a 500 error.
