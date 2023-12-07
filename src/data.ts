const data = {
  report: [],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    update_at: Date;
    type: string;
  }[];
}
