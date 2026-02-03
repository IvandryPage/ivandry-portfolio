
import type { Project } from "@/types/project.types";
import { CpuIcon, FlameIcon, LightningIcon, SparkleIcon } from "@phosphor-icons/react/dist/ssr";

export const projectsCopy: Project[] = [
  {
    id: 1,
    title: "Neural Surge",
    subtitle: "Mind-bending gestural interface",
    concept:
      "What if your computer could read your mind? This experimental UI doesn't wait for clicks—it reacts to micro-movements, breath patterns, and the electric anticipation before you even touch the screen. It's not artificial intelligence, it's digital telepathy.",
    interaction:
      "The interface predicts your next move three steps ahead. Hover states morph into navigation paths. Buttons appear exactly where your cursor wants to go. It's creepy. It's beautiful. Users call it 'uncomfortably intuitive.'",
    stack: "React, Three.js, TensorFlow.js, GLSL Shaders",
    imageUrl: "/assets/null.jpg",
    year: "2025",
    color: "var(--color-electric-blue)",
    icon: CpuIcon,
  },
  {
    id: 2,
    title: "Neon Wasteland",
    subtitle: "Cyberpunk fever dream",
    concept:
      "Imagine Blade Runner crashed into a rave and you're left wandering through the wreckage. Every neon sign tells a story. Every puddle reflects a memory. This isn't just a game environment—it's a mood, a vibe, an entire existential crisis rendered in real-time ray tracing.",
    interaction:
      "Movement feels heavy, like walking through water made of electricity. The city reacts to your presence—ads glitch when you pass, rain changes rhythm, shadows whisper secrets. Players don't just explore; they haunt this world.",
    stack: "Unity, Custom Shader Graph, Procedural Gen, Substance Designer",
    imageUrl: "/assets/null.jpg",
    year: "2025",
    color: "var(--color-neon-pink)",
    icon: FlameIcon,
  },
  {
    id: 3,
    title: "Void Protocol",
    subtitle: "Anti-productivity manifesto",
    concept:
      "What if productivity software actually helped you focus instead of drowning you in features? Void Protocol strips everything away. No notifications. No tabs. No bullsh*t. Just you, one task, and the sweet sound of absolutely nothing else.",
    interaction:
      "Launch it and the world disappears. Your entire OS fades to black. Only your current task remains, floating in digital void. Finish your task or hit escape—those are your only options.",
    stack: "Next.js, Electron, Zustand, Web Workers, Pure Spite",
    imageUrl: "/assets/null.jpg",
    year: "2026",
    color: "var(--color-acid-green)",
    icon: LightningIcon,
  },
  {
    id: 4,
    title: "Fractal Memory",
    subtitle: "Non-linear narrative chaos",
    concept:
      "Time is a flat circle, or maybe it's a möbius strip, or perhaps it's just completely shattered. Players piece together a story from memory fragments that shift every playthrough. The truth exists in the spaces between contradictions.",
    interaction:
      "Every choice ripples backward AND forward. Past decisions change based on future actions. The narrative doesn't branch—it spirals, folds, and occasionally eats itself. Finishing it once means you've barely started.",
    stack: "Unreal Engine 5, Niagara VFX, Behavior Trees, Narrative Middleware",
    imageUrl: "/assets/null.jpg",
    year: "2024",
    color: "var(--color-cyber-purple)",
    icon: SparkleIcon,
  },
];
