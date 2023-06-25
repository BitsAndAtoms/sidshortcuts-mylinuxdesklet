const Desklet = imports.ui.desklet;
const St = imports.gi.St;

function MyDesklet(metadata, desklet_id) {
    this._init(metadata, desklet_id);
}

MyDesklet.prototype = {
    __proto__: Desklet.Desklet.prototype,

    _init: function(metadata, desklet_id) {
        Desklet.Desklet.prototype._init.call(this, metadata, desklet_id);
        this.setupUI();
    },

    setupUI(){
        this.window = new St.Bin();
        
        let shortcuts = [
            "Switch windows: Alt + Tab",
            "Switch windows of the same application: Alt + `",
            "Switch workspace: Ctrl + Alt + Left/Right Arrow",
            "Move window to a new workspace: Shift + Ctrl + Alt + Left/Right Arrow",
            "Switch tabs: Ctrl + Tab"
        ];

        let text = "Keyboard Shortcuts:\n" + shortcuts.join('\n');
        this.text = new St.Label({text: text});
        
        this.window.add_actor(this.text);
        this.setContent(this.window);
    },
};

function main(metadata, desklet_id) {
    return new MyDesklet(metadata, desklet_id);
}

