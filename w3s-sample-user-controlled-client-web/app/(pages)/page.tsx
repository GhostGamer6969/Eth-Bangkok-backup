import React from "react";
import { Button, Typography } from "@mui/joy";

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <header
                style={{
                    textAlign: "center",
                    maxWidth: "800px",
                    margin: "0 auto",
                    padding: "2rem 1rem",
                }}
            >
                <Typography
                    level="h1"
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        marginBottom: "1rem",
                        color: "#e2e8f0",
                    }}
                >
                    Welcome to CeleriZ
                </Typography>
                <Typography
                    level="body-lg"
                    style={{
                        fontSize: "1.25rem",
                        marginBottom: "2rem",
                        color: "#cbd5e1",
                    }}
                >
                    Simplify your financial solutions with Circle's programmable wallet SDK.
                </Typography>
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                    <a href="/signup">
                        <Button variant="solid" color="success">
                            Get Started
                        </Button>
                    </a>
                    <a href="/learn-more">
                        <Button variant="outlined" color="neutral" style={{ color: "#ffffff" }}>
                            Learn More
                        </Button>
                    </a>
                </div>
            </header>

            {/* Feature Section */}
            <section
                style={{
                    width: "100%",
                    backgroundColor: "#1e293b",
                    padding: "4rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2rem",
                }}
            >
                <Typography
                    level="h2"
                    style={{
                        fontSize: "2rem",
                        color: "#e2e8f0",
                    }}
                >
                    Why Choose CeleriZ?
                </Typography>
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                    {/* Add your feature cards here */}
                    <FeatureCard title="Feature 1" description="Description of Feature 1" />
                    <FeatureCard title="Feature 2" description="Description of Feature 2" />
                    <FeatureCard title="Feature 3" description="Description of Feature 3" />
                </div>
            </section>
        </>
    );
}

// FeatureCard Component
const FeatureCard = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => (
    <div
        style={{
            background: "#2d3748",
            borderRadius: "8px",
            padding: "1.5rem",
            textAlign: "center",
            maxWidth: "300px",
        }}
    >
        <Typography level="h3" style={{ color: "#ffffff", marginBottom: "0.5rem" }}>
            {title}
        </Typography>
        <Typography level="body-sm" style={{ color: "#cbd5e1" }}>
            {description}
        </Typography>
    </div>
);
