"use client";

import React from "react";
import { Button, Dialog, DialogPanel, Title } from "@tremor/react";

export default function DialogExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="text-center">
        <Button size="md" onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
      </div>
      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <Title className="mb-3">Account Created Successfully</Title>
          Your account has been created successfully. You can now login to your
          account. For more information, please contact us.
          <div className="mt-3">
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Got it!
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
