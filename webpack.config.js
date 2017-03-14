var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      BigCalStyle: 'node_modules/react-big-calendar/lib/css/react-big-calendar.css',
      applicationStyles: 'app/styles/app.scss',
      Main: 'app/components/Main.jsx',
      UserList: 'app/components/UserList.jsx',
      UserDetail: 'app/components/UserDetail.jsx',
      UserHour: 'app/components/UserHour.jsx',
      UserBusyHourList: 'app/components/UserBusyHourList.jsx',
      ScheduleList: 'app/components/ScheduleList.jsx',
      ScheduleUser: 'app/components/ScheduleUser.jsx',
      Calendar: 'app/components/Calendar.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
