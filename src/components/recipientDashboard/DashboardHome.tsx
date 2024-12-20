
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Droplet, FileText, User } from "lucide-react";
import { RecipientInfo } from "@/types/ index";
import { getDocument } from "@/lib/actions/recipient.actions";
import { useEffect, useState } from "react";



// interface Recipientrecipient {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   postId: string;
//   unitRequired: string;
//   transfusionRequestDocumentUrl: string;
//   $createdAt: string;
// }

// interface RecipientDashboardProps {
//   data: RecipientData;
// }

 export function RecipientDashboard({ recipient }: { recipient: RecipientInfo }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blood Transfusion Request <br/> Details :</h1>
        <Badge variant="secondary" className="text-sm">
          {formatDate(recipient.$createdAt)}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">{recipient.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <p>{recipient.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <p>{recipient.phone}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Address Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Full Address</p>
              <p className="font-medium">{recipient.address}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Postal Code</p>
              <p className="font-medium">{recipient.postId}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplet className="h-5 w-5" />
              Transfusion Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Units Required</p>
                <p className="font-medium">{recipient.unitRequired} Unit(s)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Request Date</p>
                <p className="font-medium">{formatDate(recipient.$createdAt)}</p>
              </div>
            </div>
            <Separator />
          </CardContent>
        </Card>

        <DocumentPreview documentId={recipient.transfusionRequestDocumentId} />
      </div>
    </div>
  );
}
export default RecipientDashboard


interface DocumentPreviewProps {
  documentId: string;
}

export   function DocumentPreview({ documentId }: DocumentPreviewProps) {

  const [imageUrl, setImageUrl] =  useState<string | undefined>(undefined);

  useEffect(() => {
    // Fetch image URL and update state
    const fetchImage = async () => {
      try {
        // Await the result of getDocument
        const url = await getDocument(documentId);
        setImageUrl(url); // Update state with the resolved URL
      } catch (error) {
        console.error("Error fetching document preview:", error);
      }
    };

    fetchImage();
  }, [documentId]);

  

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Document Preview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full rounded-lg overflow-hidden border border-border">
          <img
            src={imageUrl}
            alt="Transfusion Request Document"
            className="w-full h-[400px] object-contain bg-secondary"
          />
        </div>
      </CardContent>
    </Card>
  );
}