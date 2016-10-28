'use babel';

import {BufferedProcess, CompositeDisposable, Selection} from 'atom';

export default {
    modalPanel : null,
    subscriptions : null,

    activate(state) {
        this.subscriptions = new CompositeDisposable();

        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'piknik:copy': () => this.copyToClipboard()
        }));
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'piknik:paste': () => this.pasteFromClipboard()
        }));
    },

    deactivate() {
        this.subscriptions.dispose();
    },

    serialize() {
        return {};
    },

    copyToClipboard() {
        let cb = atom.workspace.getActivePaneItem().getSelectedText();
        if (!cb.length) {
            return;
        }
        let stdout = (output) => console.log(output),
            stderr = (output) => console.error(output),
            exit = (code) => console.error("piknik exited with #{code}"),
            command = "piknik",
            args = ["-copy"];
        let ps = new BufferedProcess({command, args, stdout, stderr, exit});
        ps.process.stdin.write(cb);
        ps.process.stdin.end();
        atom.notifications.addSuccess("Sent to piknik");
    },

    pasteFromClipboard() {
        let stdout = (output) => atom.workspace.getActivePaneItem().insertText(output),
            stderr = (output) => console.error(output),
            exit = (code) => console.error("piknik exited with #{code}"),
            command = "piknik",
            args = ["-paste"];
        let ps = new BufferedProcess({command, args, stdout, stderr, exit});
        ps.process.stdin.end();
    }
}
