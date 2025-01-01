import React from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Container,
  Row,
  Column,
  Text,
} from "@react-email/components";

interface AdminEmailTempProps {
  fullName: string;
  email: string;
  phoneNO: string;
  subject: string;
  message: string;
}

export const AdminEmailTemp = ({
  fullName,
  email,
  phoneNO,
  subject,
  message,
}: AdminEmailTempProps) => {
    return (
        <Html>
        <Head />
        <Preview>New Message from Website</Preview>
    
        <Body>
          <Container className="bg-slate-500">
            <Row cellSpacing={8}>
              <Column align="center" className="h-[40px] w-1/2 bg-emerald-400/60">
                <Text className="text-2xl font-semibold leading-8">
                  Name: {fullName}
                </Text>
              </Column>
              <Column align="center" className="h-[40px] w-1/2 bg-cyan-400/60">
                <Text className="text-2xl font-semibold leading-8">
                  Subject: {subject}
                </Text>
              </Column>
            </Row>
            <Row>
              <Column align="center" className="h-[40px] w-1/2 bg-pink-400/60">
                <Text className="text-2xl font-semibold leading-8">
                  Phone No: {phoneNO}
                </Text>
              </Column>
              <Column align="center" className="h-[40px] w-1/2 bg-purple-400/60">
                <Text className="text-2xl font-semibold leading-8">
                  Email: {email}
                </Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text className="text-2xl font-semibold leading-8">
                  Message: {message}
                </Text>
              </Column>
            </Row>
          </Container>
        </Body>
      </Html>
    )
};
