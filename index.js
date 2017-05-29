module.exports = neutrino => {
  neutrino
    .config
      .when(process.env.NODE_ENV === 'production', config => {
        config.plugins.delete('minify')

        config.output.filename('[name].bundle.js')
      })
}
