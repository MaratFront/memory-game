interface IModalData {
  title?: string;
  description?: string;
  content?: Map<string, string | number>;
  handleRestart: () => void;
}
export default IModalData;
