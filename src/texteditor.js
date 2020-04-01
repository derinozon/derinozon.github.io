const editor = ace.edit("editor");

const cstxt = [
	'using System;',
	'',
	'public class Program {',
	'	public static void Main () {',
	'		Console.WriteLine("content");',
	'	}',
	'}'
].join("\n");

const pytxt = [
	"print('content')",
	""
].join("\n");

const javatxt = [
	'class Program {',
	'	public static void main (String[] args) {',
	'		System.out.println("test");',
	'	}',
	'}'
].join("\n");

const jstxt = [
	"console.log('content');",
	" "
].join("\n");

const cpptxt = [
	'#include <iostream>',
	'',
	'using namespace std',
	'',
	'int main () {',
	'',
	'}'
].join("\n");

const cs = ace.createEditSession(cstxt, "ace/mode/csharp");
const py = ace.createEditSession(pytxt, "ace/mode/python");
const java = ace.createEditSession(javatxt, "ace/mode/java");
const js = ace.createEditSession(jstxt, "ace/mode/javascript");
const cpp = ace.createEditSession(cpptxt, "ace/mode/c_cpp");

function INIT () {
	console.log("initializing text editor...");

	editor.setTheme("ace/theme/monokai");
	editor.setShowPrintMargin(false);
	editor.setSession(cs);
}

INIT();