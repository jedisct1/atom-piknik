# Piknik package for Atom

Piknik extension for Atom, to copy/paste anything over the network.

Make a local selection; paste it instantaneously into Atom running on another computer.

## Requirements

[Piknik](https://github.com/jedisct1/piknik) has to be installed and configured on the system.
The `piknik` executable must be in your `$PATH`.

On MacOS, this can be easily achieved using Homebrew:
```sh
$ brew install piknik
```

## Installation

```sh
$ apm install piknik
```

Or just install `piknik` from the Atom package manager.

## Usage

* Copy the selection to the shared clipboard: `Ctrl-Alt-Shift C` (or `piknik:copy`)
* Paste the shared clipboard: `Ctrl-Alt-Shift V` (or `piknik-paste`)

Enjoy.
