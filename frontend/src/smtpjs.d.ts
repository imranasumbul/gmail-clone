declare const Email: {
    send(options: {
      Host: string;
      Username: string;
      Password: string;
      Port: number,
      To: string;
      From: string;
      Subject: string;
      Body: string;
    }): Promise<string>;
  };
  