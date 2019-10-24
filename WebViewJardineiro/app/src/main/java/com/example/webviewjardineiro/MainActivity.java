package com.example.webviewjardineiro;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    private WebView myWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        myWebView = (WebView) findViewById(R.id.webview);
        myWebView.loadUrl("http://10.0.2.2:3000");

        WebSettings webSettings = myWebView.getSettings();
        //Habilitando o JavaScript
        webSettings.setJavaScriptEnabled(true);
    }
}
