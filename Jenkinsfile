pipeline {
  agent any
  environment {
      DOCKER_REGISTRY_HOSTNAME = "${TCR_REGISTRY_HOSTNAME}"
      DOCKER_REGISTRY_CREDENTIAL = "${TCR_REGISTRY_CREDENTIAL}"
      DOCKER_REPOSITORY_NAME = "${TCR_NAMESPACE_NAME}/${TCR_REPOSITORY_NAME}"
      IMAGE_NAME = "${GIT_LOCAL_BRANCH}-${CI_BUILD_NUMBER}"
    }
  stages {
    stage('检出') {
      steps {
        checkout([
          $class: 'GitSCM',
          branches: [[name: GIT_BUILD_REF]],
          userRemoteConfigs: [[
            url: GIT_REPO_URL,
            credentialsId: CREDENTIALS_ID
          ]]])
        }
      }
      stage('构建镜像') {
          steps {
              sh "docker build -t ${DOCKER_REPOSITORY_NAME}:${IMAGE_NAME} ."
              sh "docker tag ${DOCKER_REPOSITORY_NAME}:${IMAGE_NAME} ${DOCKER_REPOSITORY_NAME}:latest"
              archiveArtifacts(artifacts: 'dist/*', fingerprint: true)
          }
      }
      stage('推送镜像') {
          steps {
              script {
                  docker.withRegistry("https://${DOCKER_REGISTRY_HOSTNAME}", "${DOCKER_REGISTRY_CREDENTIAL}") {
                      docker.image("${DOCKER_REPOSITORY_NAME}:${IMAGE_NAME}").push()
                      docker.image("${DOCKER_REPOSITORY_NAME}:latest").push()
                  }
              }
          }
      }
    }
  }