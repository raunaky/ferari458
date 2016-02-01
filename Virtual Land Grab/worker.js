
importScripts("workerlib.js");

	onmessage = function(task) {

		var workResult = computeRow(task.data);

		postMessage(workResult);
	}