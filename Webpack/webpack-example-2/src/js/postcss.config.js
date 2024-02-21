// Можно хранит в папке config

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    // ЧТО ЭТО?!!
    // discardComments: { removeAll: true } - удаляет комментарии
    require('css-mqpacker')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}