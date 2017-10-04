This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start mySideMenu sidemenu
```

Then, to run it, cd into `mySideMenu` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

### Build and Publish App :
[reference](http://ionicframework.com/docs/v1/guide/publishing.html)

ionic cordova build --release android


jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore "C:\Projects\studyguide\studyguideapp\my-release-key.keystore" android-release-unsigned.apk alias_name

"C:\Users\rsites\AppData\Local\Android\sdk\build-tools\23.0.3\zipalign.exe" -v 4 android-release-unsigned.apk Lacey.apk