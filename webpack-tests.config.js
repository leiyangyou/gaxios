/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Use `npm run webpack` to produce Webpack bundle for this library.

const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '../../package.json': path.resolve(__dirname, 'package.json')
    }
  },
  node: {
    child_process: 'empty',
    fs: 'empty',
    crypto: 'empty'
  },
  module: {
    rules: [
      {
        test: /node_modules\/proxy-agent\//,
        use: 'null-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  mode: 'production',
  plugins: []
};
