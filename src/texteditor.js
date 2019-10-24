const editor = ace.edit("editor");

const cstxt = 'using System;\n\npublic class Program {\n	public static void Main () {\n		Console.WriteLine("content");\n	}\n}';
const pytxt = "print('content')";
const javatxt = "pr'content')";
const jstxt = "console.log('content');";
const cpptxt = "consello');";

const cs = ace.createEditSession(cstxt, "ace/mode/csharp")
const py = ace.createEditSession(pytxt, "ace/mode/python")
const java = ace.createEditSession(javatxt, "ace/mode/java")
const js = ace.createEditSession(jstxt, "ace/mode/javascript")
const cpp = ace.createEditSession(cpptxt, "ace/mode/c_cpp")

function INIT () {
	console.log("initializing...");

	editor.setTheme("ace/theme/monokai");
	editor.setShowPrintMargin(false);
}

function ChangeSession (i) {
	if (i === 0) {
		editor.setSession(cs);
	}
	if (i === 1) {
		editor.setSession(py);
	}
	if (i === 2) {
		editor.setSession(java);
	}
	if (i === 3) {
		editor.setSession(js);
	}
	if (i === 4) {
		editor.setSession(cpp);
	}

}
INIT();
ChangeSession(0);