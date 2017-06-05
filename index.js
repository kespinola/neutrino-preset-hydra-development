module.exports = neutrino => {
  neutrino
    .config
      .when(process.env.NODE_ENV === 'production', config => {
        config.plugins.delete('minify')
        config.plugins.delete('chunk')
      })
      .when(process.env.NODE_ENV == 'development', config => {
        config.plugins.delete('chunk')
      })
}
