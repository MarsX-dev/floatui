import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIAvatarsWithInfo() {
  return <div className="py-16 flex items-center justify-center gap-10">
    {/* Avatar 1 */}
    <Avatar.Root className="flex items-center space-x-3">
      <Avatar.Image
        src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
        className="w-12 h-12 rounded-full object-cover"
      />
      <Avatar.Fallback
        delayMs={600}
        className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center"
      >
        CT
      </Avatar.Fallback>
      <div>
        <span className="text-gray-700 text-sm font-medium">Jane Smith</span>
        <span className="block text-gray-700 text-xs">
          janesmith@example.com
        </span>
      </div>
    </Avatar.Root>
    {/* Avatar 2 */}
    <Avatar.Root className="flex items-center space-x-3">
      <Avatar.Image
        src="https://randomuser.me/api/portraits/women/79.jpg"
        className="w-16 h-16 rounded-full object-cover"
      />
      <Avatar.Fallback
        delayMs={600}
        className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center"
      >
        CT
      </Avatar.Fallback>
      <div>
        <span className="text-gray-700 text-sm font-medium">Nikita Andrew</span>
        <span className="block text-gray-700 text-xs">
          nikitaandrew@example.com
        </span>
      </div>
    </Avatar.Root>
  </div>
}

        