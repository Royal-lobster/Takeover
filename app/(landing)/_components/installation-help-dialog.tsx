"use client";

import { CheckCircleIcon, CopyIcon, TerminalIcon } from "@phosphor-icons/react";
import { defineStepper } from "@stepperize/react";
import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const { useStepper } = defineStepper(
  { id: "homebrew", title: "Ensure Homebrew" },
  { id: "terminal", title: "Open Terminal" },
  { id: "paste", title: "Paste command" },
  { id: "run", title: "Run command" },
);

interface InstallationHelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  command: string;
  isUninstallMode?: boolean;
}

export function InstallationHelpDialog({
  open,
  onOpenChange,
  command,
  isUninstallMode = false,
}: InstallationHelpDialogProps) {
  const [, copy] = useCopyToClipboard();
  const [copiedCommand, setCopiedCommand] = useState<string>("");
  const stepper = useStepper();

  const HOMEBREW_INSTALL_COMMAND =
    '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"';

  const handleCopyCommand = (cmd: string) => {
    copy(cmd);
    setCopiedCommand(cmd);
    setTimeout(() => setCopiedCommand(""), 2000);
  };

  const isCopied = (cmd: string) => copiedCommand === cmd;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl" size="xl">
        <DialogHeader>
          <DialogTitle>
            How to {isUninstallMode ? "Uninstall" : "Install"} Your Apps
          </DialogTitle>
          <DialogDescription>
            Follow these simple steps to{" "}
            {isUninstallMode ? "uninstall" : "install"} your selected
            applications using Homebrew in the Terminal.
          </DialogDescription>
        </DialogHeader>

        <DialogBody className="space-y-4">
          {/* Stepper Progress */}
          <div className="flex items-center justify-between">
            {stepper.all.map((step, index) => {
              const stepIndex = stepper.all.findIndex((s) => s.id === step.id);
              const currentIndex = stepper.all.findIndex(
                (s) => s.id === stepper.current.id,
              );
              const isCompleted = stepIndex < currentIndex;
              const isCurrent = step.id === stepper.current.id;

              return (
                <div key={step.id} className="flex items-center flex-1 relative">
                  {index < stepper.all.length - 1 && (
                    <div
                      className={`absolute left-1/2 top-4 h-0.5 w-full transition-colors ${
                        isCompleted ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                  <div className="flex flex-col items-center w-full gap-1.5 relative z-10">
                    <button
                      type="button"
                      onClick={() => stepper.goTo(step.id)}
                      className={`flex h-8 w-8 items-center justify-center text-xs font-bold transition-colors ${
                        isCurrent
                          ? "bg-primary text-primary-foreground rounded-md"
                          : isCompleted
                            ? "bg-primary text-primary-foreground rounded-md"
                            : "bg-secondary text-muted-foreground rounded-md"
                      }`}
                    >
                      {isCompleted ? "✓" : index}
                    </button>
                    <span className="text-[10px] text-center text-muted-foreground leading-tight">
                      {step.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          {stepper.switch({
            homebrew: () => (
              <div className="space-y-3">
                <h3 className="font-semibold">
                  First, ensure Homebrew is installed
                </h3>
                <p className="text-sm text-muted-foreground">
                  Homebrew is a package manager for macOS. If you don't have it
                  installed yet, copy and run this command:
                </p>

                <div className="overflow-hidden rounded-lg border bg-secondary/30">
                  <div className="flex items-center justify-between gap-2 border-b bg-secondary/50 px-3 py-1.5">
                    <div className="flex items-center gap-2">
                      <TerminalIcon className="size-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Terminal Command
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 gap-1 px-2 text-xs"
                      onClick={() =>
                        handleCopyCommand(HOMEBREW_INSTALL_COMMAND)
                      }
                    >
                      {isCopied(HOMEBREW_INSTALL_COMMAND) ? (
                        <>
                          <CheckCircleIcon className="size-3" weight="fill" />
                          Copied
                        </>
                      ) : (
                        <>
                          <CopyIcon className="size-3" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="overflow-x-auto px-3 py-2">
                    <code className="text-xs font-mono break-all">
                      {HOMEBREW_INSTALL_COMMAND}
                    </code>
                  </div>
                </div>
              </div>
            ),
            terminal: () => (
              <div className="space-y-3">
                <h3 className="font-semibold">Open Terminal</h3>
                <p className="text-sm text-muted-foreground">
                  Terminal lets you run commands. Here's how to open it:
                </p>

                <div className="rounded-lg border bg-secondary/20 p-4 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold shrink-0 mt-0.5">
                      A
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">Using Spotlight</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Press{" "}
                        <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-secondary border rounded">
                          ⌘ Cmd
                        </kbd>{" "}
                        +{" "}
                        <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-secondary border rounded">
                          Space
                        </kbd>
                        , type "Terminal", press{" "}
                        <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-secondary border rounded">
                          Enter
                        </kbd>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold shrink-0 mt-0.5">
                      B
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">Using Finder</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Applications → Utilities → Terminal
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 overflow-hidden rounded-md border bg-background">
                    <div className="flex items-center gap-2 border-b bg-secondary/50 px-2.5 py-1.5">
                      <div className="flex gap-1">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                      </div>
                      <span className="text-[10px] text-muted-foreground">
                        Terminal
                      </span>
                    </div>
                    <div className="bg-black/90 px-3 py-2 font-mono text-[11px] text-green-400">
                      <div>Last login: {new Date().toDateString()}</div>
                      <div className="mt-1.5">
                        user@MacBook ~ %{" "}
                        <span className="animate-pulse">▊</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
            paste: () => (
              <div className="space-y-3">
                <h3 className="font-semibold">Paste the command</h3>
                <p className="text-sm text-muted-foreground">
                  The command has been copied. Now paste it into Terminal:
                </p>

                <div className="overflow-hidden rounded-lg border bg-secondary/30">
                  <div className="flex items-center justify-between gap-2 border-b bg-secondary/50 px-3 py-1.5">
                    <div className="flex items-center gap-2">
                      <TerminalIcon className="size-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Your Command
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 gap-1 px-2 text-xs"
                      onClick={() => handleCopyCommand(command)}
                    >
                      {isCopied(command) ? (
                        <>
                          <CheckCircleIcon className="size-3" weight="fill" />
                          Copied
                        </>
                      ) : (
                        <>
                          <CopyIcon className="size-3" />
                          Copy Again
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="overflow-x-auto px-3 py-2">
                    <code className="text-xs font-mono break-all">
                      {command}
                    </code>
                  </div>
                </div>

                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="text-sm mb-2">
                    In Terminal, press{" "}
                    <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-secondary border rounded">
                      ⌘ Cmd
                    </kbd>{" "}
                    +{" "}
                    <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-secondary border rounded">
                      V
                    </kbd>{" "}
                    to paste
                  </p>

                  <div className="overflow-hidden rounded-md border bg-background">
                    <div className="flex items-center gap-2 border-b bg-secondary/50 px-2.5 py-1.5">
                      <div className="flex gap-1">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                      </div>
                      <span className="text-[10px] text-muted-foreground">
                        Terminal
                      </span>
                    </div>
                    <div className="bg-black/90 px-3 py-2 font-mono text-[11px] text-green-400">
                      <div>user@MacBook ~ % {command}</div>
                      <div className="mt-1">
                        <span className="animate-pulse">▊</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
            run: () => (
              <div className="space-y-3">
                <h3 className="font-semibold">Press Enter to run</h3>
                <p className="text-sm text-muted-foreground">
                  After pasting, press{" "}
                  <kbd className="px-1.5 py-0.5 text-[10px] font-semibold bg-secondary border rounded">
                    Enter
                  </kbd>{" "}
                  to execute. Homebrew will{" "}
                  {isUninstallMode ? "uninstall" : "install"} your apps.
                </p>

                <div className="rounded-lg border bg-secondary/20 p-3 space-y-2.5">
                  <div className="overflow-hidden rounded-md border bg-background">
                    <div className="flex items-center gap-2 border-b bg-secondary/50 px-2.5 py-1.5">
                      <div className="flex gap-1">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                      </div>
                      <span className="text-[10px] text-muted-foreground">
                        Terminal
                      </span>
                    </div>
                    <div className="bg-black/90 px-3 py-2 font-mono text-[11px] text-green-400">
                      <div>user@MacBook ~ % {command}</div>
                      <div className="mt-1.5 text-blue-400">
                        ==&gt; Downloading...
                      </div>
                      <div className="text-yellow-400">
                        ==&gt; {isUninstallMode ? "Uninstalling" : "Installing"}
                        ...
                      </div>
                      <div className="text-green-400">✓ Success!</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 rounded-md bg-primary/10 p-2.5">
                    <CheckCircleIcon
                      className="size-4 text-primary shrink-0 mt-0.5"
                      weight="fill"
                    />
                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium text-foreground">That's it!</p>
                      <p className="mt-0.5">
                        Your applications will be{" "}
                        {isUninstallMode
                          ? "uninstalled"
                          : "installed and ready to use"}
                        . This may take a few minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          })}
        </DialogBody>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={stepper.prev}
            disabled={stepper.isFirst}
          >
            Previous
          </Button>
          <div className="flex-1 text-center text-sm text-muted-foreground">
            Step {stepper.all.findIndex((s) => s.id === stepper.current.id) + 1}{" "}
            of {stepper.all.length}
          </div>
          {stepper.isLast ? (
            <Button onClick={() => onOpenChange(false)}>Finish</Button>
          ) : (
            <Button onClick={stepper.next}>Next</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
