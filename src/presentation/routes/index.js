export default function routes(app, express) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
}
