mWebview.setWebChromeClient(new WebChromeClient(){
      // For Android 4.1+
      @SuppressWarnings("unused")
      public void openFileChooser(ValueCallback<Uri> uploadMsg, String acceptType, String capture) {
          mUploadMessage = uploadMsg;

          Intent i = new Intent(Intent.ACTION_GET_CONTENT);

          i.addCategory(Intent.CATEGORY_OPENABLE);
          i.setType(acceptType);

          startActivityForResult(Intent.createChooser(i, "SELECT"), 100);
      }

      // For Android 5.0+
      @SuppressLint("NewApi")
      public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
          if (mUploadMessageArr != null) {
              mUploadMessageArr.onReceiveValue(null);
              mUploadMessageArr = null;
          }

          mUploadMessageArr = filePathCallback;

          Intent intent = fileChooserParams.createIntent();

          try {
              startActivityForResult(intent, 101);
          } catch (ActivityNotFoundException e) {
              mUploadMessageArr = null;

              Toast.makeText(activity,"Some error occurred.", Toast.LENGTH_LONG).show();

              return false;
          }

          return true;
      }
  });
