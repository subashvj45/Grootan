let b = document.getElementById("button");
let t = document.getElementById("text");
function isvalid(){
	try{
		if(JSON.parse(t.value)){
			var filename = new ActiveXObject("Scripting.FileSystemObject");
			var fh = fso.CreateTextFile("c:\\Test.java",true);
			fh.WriteLine(
				import java.util.List;
				public class Converted{
					private string about;
					public void setAbout(string about){
						this.about = t.value[about]
					}
					public String getAbout(){
						return about
					}
				}
				);
			fh.close();
		}
	}catch(e){
		console.log("Its not a proper json");
	}
}
b.addEventListener("click",isvalid);

