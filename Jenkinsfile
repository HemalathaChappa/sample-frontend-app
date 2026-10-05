pipeline {
    agent any
    environment {
        APP_NAME = 'sample-frontend'
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling latest code from GitHub...'
                checkout scm
            }
        }
        stage('Deploy') {
            steps {
                echo 'Starting app with PM2...'
               bat 'pm2 delete %APP_NAME% || exit /b 0'
               bat 'pm2 serve public 4500 --name %APP_NAME%'
            }
        }
    }
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Pipeline failed. Check console output above.'
        }
    }
}
