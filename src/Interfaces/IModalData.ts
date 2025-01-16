export default interface IModalData {
  title?: string;
  description?: string;
  content?: Map<string, string | number>;
  handleRestart: () => void;
}
