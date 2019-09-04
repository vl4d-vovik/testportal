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
            //bat "D://vvoitehovici//Downloads//apache-jmeter-5.1.1//bin//jmeter.bat -Jjmeter.save.saveservice.output_format=xml -n -t jmeter//2.jmx"
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
    subject: "Failed: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
    body: "Failed: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
    to: "vvoitehovici@eagleinvsys.com"
)
}
