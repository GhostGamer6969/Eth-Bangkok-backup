import "../globals.css";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { ClientProviders, Footer } from "@/app/components"; // Ensure ClientProviders is imported correctly
import { Button } from "@mui/joy";

const inter = Inter({
    subsets: ["cyrillic"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div id="__next">
                    <ClientProviders>
                        <div
                            className="gradient-background"
                            style={{
                                background: "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
                                minHeight: "100vh",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                color: "#ffffff",
                            }}
                        >
                            {/* Navbar */}
                            <nav
                                style={{
                                    width: "100%",
                                    padding: "1rem 2rem",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    background: "#1e293b",
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    zIndex: 10,
                                }}
                            >
                                <Image
                                    src={`/logo.jpg`}
                                    alt="CeleriZ"
                                    width={140}
                                    height={36}
                                />

                                <div style={{ display: "flex", gap: "1rem" }}>
                                    <a href="../">
                                        <Button variant="outlined" color="neutral" style={{ color: "#ffffff" }}>
                                            Home
                                        </Button>
                                    </a>
                                    <a href="http://localhost:3000/">
                                        <Button variant="outlined" color="neutral" style={{ color: "#ffffff" }}>
                                            CCTP
                                        </Button>
                                    </a>
                                    <a href="/signin">
                                        <Button variant="outlined" color="primary" style={{ color: "#ffffff" }}>
                                            Login
                                        </Button>
                                    </a>
                                    <a href="/signup">
                                        <Button variant="outlined" color="success" style={{ color: "#ffffff" }}>
                                            Sign Up
                                        </Button>
                                    </a>
                                </div>
                            </nav>

                            {/* Main Content */}
                            <main
                                style={{
                                    width: "100%",
                                    paddingTop: "6rem", // Adjust for fixed navbar
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                {children}
                            </main>

                            {/* Footer */}
                            <Footer />
                        </div>
                    </ClientProviders>
                </div>
            </body>
        </html>
    );
}
