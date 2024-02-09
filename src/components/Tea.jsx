import Teafun from "./Teafun";

export default function Tea() {
  let tea = [];
  for (let i = 1; i <= 12; i++) {
    tea.push(<Teafun key={i} guest={i} />);
  }
  return tea;
}
