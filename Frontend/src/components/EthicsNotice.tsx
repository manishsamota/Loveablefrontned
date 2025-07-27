import { Shield } from "lucide-react";

const EthicsNotice = () => {
  return (
    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 mb-8 text-primary-dark">
      <div className="flex items-center gap-2 font-semibold mb-2">
        <Shield className="w-5 h-5" />
        Research Ethics & Privacy
      </div>
      <div className="text-sm leading-relaxed">
        This platform is part of a University of Lincoln research study on streak-based gamification. 
        Your participation is voluntary, data is anonymized, and you can withdraw at any time. 
        We use a "streak freeze" feature to minimize stress and maintain positive learning experiences.
      </div>
    </div>
  );
};

export default EthicsNotice;