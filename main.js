var images = ["https://images-na.ssl-images-amazon.com/images/I/51y2eSmI-NL.jpg", "https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg", "https://i.pinimg.com/736x/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg", "https://image.shutterstock.com/image-vector/cute-grandfather-cartoon-260nw-726215185.jpg","https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg", "https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?size=626&ext=jpg"];

var names = ["Family Book", "ANkit Danawala", "Archita Danawala", "Dushyant Danawala", "Ila Danawala", "Neetya Danawala"];

var i = 0;
function update()
{
i++;
var number_of_family_member_in_array=5
if(i > numbers_of_family_member_in_array)
{
i=0;
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_names").innerHTML = updatedName;
}