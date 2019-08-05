node {
    properties([pipelineTriggers([cron('H H * * *')])])
    try {
        stage('checkout') {
            echo 'checkout'
            checkout scm
        }
        echo 'Ok'
    } catch (e) {
        echo 'Failed'
    }
    try {
        stage('test') {
            echo 'test'
            bat 'npm test -- --tag test1'
        }
        echo 'Ok'
    } catch (e) {
        echo 'Failed'
    }
    try {
        stage('Test report') {
            echo 'Test report'
            junit '**/reports/*.xml'
        }
        echo 'Ok'
    } catch (e) {
        echo 'Failed'
    }
    try {
        stage('Final') {
            echo 'Ok'
        }
    } catch (e) {
        echo 'Failed'
    }
}

def notify(status) {
   wrap([$class: 'BuildUser']) {
       emailext (
       subject: "${status}: Job ${env.JOB_NAME} ([${env.BUILD_NUMBER})",
       body: """
       Check console output at <a href="${env.BUILD_URL}">${env.JOB_NAME} (${env.BUILD_NUMBER})</a>""",
       to: "${BUILD_USER_EMAIL}",
       from: 'jenkins@company.com')
   }
}