Capacitor - official native runtime for Ionic
# Setup
### To install ionic cli
```sh
npm install -g @ionic/cli native-run cordova-res
````
- For an Ionic Angular project:
```sh
npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
```
- To create a blank project:
```sh
npm install @ionic/pwa-elements
```
#
### To create new project 
- For a photo gallery project with Angular and Capacitor:
```sh
ionic start photo-gallery tabs --type=angular --capacitor
```
- For an Ionic Angular project:
```sh
ionic start firstapp --type=ionic-angular
```
- For create a blank project:
```sh
ionic start firstapp blank
```
- To start a local development server:
```sh
ionic serve
```

- To check ionic version
```sh
ionic info
```

- To generate a page
```sh
ionic generate page users
```
- To generate a new service:
```sh
ionic g service services/photo
```


#
<br><br>
The apk is generated in this folder `C:\Users\pcUsername\firstapp\platforms\android\build\outputs\apk`
<br><br>
#

- To uninstall the global Ionic CLI:
```sh
npm uninstall -g ionic
```

#
### Build Process 
#### Building for iOS:
```sh
ionic build
ionic cap add ios
````
#### Building for Android:
```sh
ionic build
ionic cap add android
```
- sync and copy files:
```sh
ionic cap copy
ionic cap sync
```

- To open the Android project in Android Studio:
```sh
ionic cap open android
```

- run on wifi
```sh
ionic capacitor run android -l --external
```
#
#### Deploying app in android-
```sh
ionic integrations disable capacitor
npm i -g cordova
ionic cordova platform add android
ionic cordova build android --prod --release // flags optional
```
or
```sh
ionic capacitor build android
ionic capacitor build android --prod --release
```
- To assemble the APK using Gradle:
````sh
 ionic capacitor copy android 
 cd android 
 ./gradlew assembleDebug 
 cd ..
````


#
- get git origin
````sh
git config --get remote.origin.url
````

- For checking the Git remote repository:
````sh
git remote -v
````
