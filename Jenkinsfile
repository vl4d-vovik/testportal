node {
    triggers {
        cron('H/10 * * * *')
    }
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