module.exports = {
  name: 'ae',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ae',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
