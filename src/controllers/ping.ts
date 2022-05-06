interface PingResponse {
  message: string;
}

export default function PingController {
  async getMessage(): Promise<PingController> {
    return {
      message: "pong"
    }
  }
}