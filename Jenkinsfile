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
        notifyFailed()
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

def notifyFailed() {
emailext (
    subject: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
    body: """Failed: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'""",
    from: "Jenkins",
    to: "vvoitehovici@eagleinvsys.com"
)
}
