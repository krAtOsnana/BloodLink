import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [notifications, setNotifications] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., update user settings)
    console.log("Settings updated:", { name, email, notifications });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <Button variant="destructive" className="bg-white/90 hover:bg-white/30 hover:text-slate-800 text-dark-400" type="submit" >Save Changes</Button>
      </form>
    </div>
  );
};

export default Settings;

