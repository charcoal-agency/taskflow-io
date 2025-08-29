"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Key,
  Save,
  Upload
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6 mt-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            
            <div className="flex items-center gap-6 mb-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload New Photo
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  JPG, GIF or PNG. Max size of 5MB
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself" className="resize-none" rows={4} />
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6 mt-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications for important updates
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Push Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications on your devices
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Task Reminders</h3>
                  <p className="text-sm text-muted-foreground">
                    Get reminders before task deadlines
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Mention Notifications</h3>
                  <p className="text-sm text-muted-foreground">
                    Notify when someone mentions you
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6 mt-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Password</h3>
                <Button variant="outline">Change Password</Button>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Enable 2FA</p>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Active Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">
                        Chrome on Windows • Current device
                      </p>
                    </div>
                    <Button variant="outline" size="sm">Current</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">MacBook Pro</p>
                      <p className="text-sm text-muted-foreground">
                        Safari on macOS • Last active 2 hours ago
                      </p>
                    </div>
                    <Button variant="outline" size="sm">Logout</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-6 mt-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Appearance</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Theme</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                    <div className="h-32 bg-white border rounded mb-2"></div>
                    <p className="text-center">Light</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                    <div className="h-32 bg-gray-900 border rounded mb-2"></div>
                    <p className="text-center">Dark</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer border-primary">
                    <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-900 border rounded mb-2"></div>
                    <p className="text-center font-medium">System</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Language</h3>
                <select className="w-48 border rounded-md p-2">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="integrations" className="space-y-6 mt-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Integrations</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold">G</span>
                  </div>
                  <div>
                    <p className="font-medium">Google Calendar</p>
                    <p className="text-sm text-muted-foreground">
                      Sync your tasks and events with Google Calendar
                    </p>
                  </div>
                </div>
                <Button variant="outline">Connect</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-400 flex items-center justify-center">
                    <span className="text-white font-bold">O</span>
                  </div>
                  <div>
                    <p className="font-medium">Outlook</p>
                    <p className="text-sm text-muted-foreground">
                      Sync your tasks and events with Outlook Calendar
                    </p>
                  </div>
                </div>
                <Button variant="outline">Connect</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-red-500 flex items-center justify-center">
                    <span className="text-white font-bold">Z</span>
                  </div>
                  <div>
                    <p className="font-medium">Zapier</p>
                    <p className="text-sm text-muted-foreground">
                      Connect with thousands of apps through Zapier
                    </p>
                  </div>
                </div>
                <Button variant="outline">Connect</Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;