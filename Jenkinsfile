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
                bat 'pm2 restart %APP_NAME% || pm2 start serve --name %APP_NAME% -- -s public -l 4500'
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
