let input;
input = "";

switch (input) {
  case 1:
  case "y":
  case "yes":
    document.write("continue.....");
    break;
  case 0:
  case "n":
  case "no":
    document.write("End.....");
    break;
  default:
    document.write("wrong input");
}
