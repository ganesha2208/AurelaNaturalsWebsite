import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught:", error, info);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.assign("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-ivory to-cream px-6">
          <div className="text-center max-w-md">
            <p className="eyebrow text-saffron-dark mb-4">Something stirred</p>
            <h1 className="heading-serif text-4xl md:text-5xl text-primary mb-4">
              A small hiccup in our garden.
            </h1>
            <p className="text-charcoal/70 mb-8">
              Please refresh the page. If this keeps happening, message us on WhatsApp.
            </p>
            <button onClick={this.handleReset} className="btn-gold">
              Return Home
            </button>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
