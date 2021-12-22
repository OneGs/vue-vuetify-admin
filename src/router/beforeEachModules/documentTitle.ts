import { PipeBeforeEach } from "@/types/router";

const title = "pipelineBeforeEach";

class DocumentTitle extends PipeBeforeEach {
  beforeEach() {
    document.title = title;
  }
}

export default new DocumentTitle(5000);
