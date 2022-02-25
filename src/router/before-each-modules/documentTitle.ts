import { PipeBeforeEach } from "@/router/beforeEach";

const title = "pipelineBeforeEach";

class DocumentTitle extends PipeBeforeEach {
  beforeEach() {
    document.title = title;
  }
}

export default new DocumentTitle(5000);
