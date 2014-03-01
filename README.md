Google BigQuery + Nodejs
=========

A Nodejs + Express app with JWT Service Accounts for Google BigQuery

Installation
--------------

* Visit https://console.developers.google.com/project.
* Select your project and click on API & auths > Credentials.
* Click on "Generate New Client ID". Choose Serice Account.
* Download your p12 key and note down your secret.
* Next run the following command to decrypt the key file.

    ```sh
    openssl pkcs12 -in KEYFILENAME.p12 -out KEYFILENAME.pem -nocerts -nodes
    ```

* Clone the repo and install dependencies.

    ```sh
    git clone [git-repo-url] node-google-bigquery
    cd node-google-bigquery
    npm install
    ```

* Replace appropriate values in index.js and run.

    ```sh
    node index.js
    ```
    