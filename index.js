module.exports = neutrino => {
  neutrino
    .config
      .when(process.env.NODE_ENV === 'production', config => {
        config.plugins.delete('minify')
        config.plugins.delete('chunk')

        config.output.filename('[name].bundle.js')
      })
      .when(process.env.NODE_ENV == 'development', config => {
        config.plugins.delete('chunk')
      })
}
